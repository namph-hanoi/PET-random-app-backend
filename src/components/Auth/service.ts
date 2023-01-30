import * as Joi from 'joi';
import UserModel from './model';
import { IAuthService } from './interface';

/**
 * @export
 * @implements {IAuthService}
 */
const AuthService: IAuthService = {
    /**
     * @param {UserModel} body
     * @returns {Promise <UserModel>}
     * @memberof AuthService
     */
    async createUser(body: UserModel): Promise < UserModel > {
        try {
            // const validate: Joi.ValidationResult = AuthValidation.createUser(body);

            // if (validate.error) {
            //     throw new Error(validate.error.message);
            // }

            const user: UserModel = new UserModel();
            user.email = body.email;
            user.password = body.password;

            const isUserExist: UserModel = await UserModel.findOneBy({
                email: body.email,
            });

            if (isUserExist) {
                throw new Error('This email already exists');
            }

            const saved: UserModel = await user.save();

            return saved;
        } catch (error) {
            throw new Error(error);
        }
    },
    // /**
    //  * @param {UserModel} body
    //  * @returns {Promise <UserModel>}
    //  * @memberof AuthService
    //  */
    // async getUser(body: UserModel): Promise < UserModel > {
    //     try {
    //         const validate: Joi.ValidationResult = AuthValidation.getUser(body);

    //         if (validate.error) {
    //             throw new Error(validate.error.message);
    //         }

    //         const user: UserModel = await UserModel.findOne({
    //             email: body.email,
    //         });

    //         const isMatched: boolean = user && await user.comparePassword(body.password);

    //         if (isMatched) {
    //             return user;
    //         }

    //         throw new Error('Invalid password or email');
    //     } catch (error) {
    //         throw new Error(error);
    //     }
    // },
};

export default AuthService;
