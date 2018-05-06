/**
 * Created by rakhmatullahyoga on 05/09/17.
 */

'use strict';

module.exports = function (MODULES) {
    let Bcrypt = MODULES.BCRYPT;
    let jwt = MODULES.JWT;
    let mongoose = MODULES.MONGOOSE;
    let mongooseDelete = MODULES.MONGOOSE_DELETE;
    let mongoosePaginate = MODULES.MONGOOSE_PAGINATE;
    let mongooseUnique = MODULES.MONGOOSE_UNIQUE;
    let randomString = MODULES.RANDOM_STRING; I;
    let Schema = mongoose.Schema;

    // User schema
    let userSchema = new Schema({
        email: {type: String, unique: true, sparse: true},
        phone: {type: String, unique: true, sparse: true},
        hash: {type: String},
        username: {type: String, unique: true, sparse: true},
        facebookId: {type: String},
        googleId: {type: String},
        linkedinId: {type: String},
        confirm_status: {type: Boolean, default: false}
    }, {timestamps: {}});

    // Email input validation using regex
    userSchema.path('email').validate(function (email) {
        let emailRegex = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailRegex.test(email);
    }, 'Invalid email field');

    // Define plugins used
    userSchema.plugin(mongooseDelete, {deletedAt: true, overrideMethods: 'all'});
    userSchema.plugin(mongoosePaginate);
    userSchema.plugin(mongooseUnique, {message: 'is already taken'});

    // Define setter for password
    userSchema.virtual('password').set(function (value) {
        this.hash = Bcrypt.hashSync(value, Bcrypt.genSaltSync(10));
    });

    // Instance methods
    userSchema.methods.validPassword = function (password) {
        return Bcrypt.compareSync(password, this.hash);
    };
    userSchema.methods.getJWT = function () {
        return jwt.sign({
            _id: this._id,
            confirm_status: this.confirm_status
        }, process.env.JWT_SECRET);
    };
    userSchema.methods.resetPassword = function () {
        return randomString.generate(8);
    };

    return userSchema;
};
