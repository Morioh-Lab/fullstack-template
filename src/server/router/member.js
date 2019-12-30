


const _ = require('mix-dash'),
    // mongoose = require('mongoose'),
    Joi = require('@hapi/joi'),
    Hash = require('mix-hash'),
    JWT = require('jsonwebtoken'),
    Member = require('../model/member'),
    config = require('../config');

module.exports = [

    {

        method: 'POST',
        path: '/login',
        options: {
            auth: false,
            validate: {
                payload: Joi.object({
                    uid: Joi.string().lowercase().required(),
                    pwd: Joi.string().required(),
                    a: Joi.number().allow(null)
                })
            }

        },
        handler: async (request, h) => {

            var _pwd = Hash.pwd(request.payload.pwd);
            var _uid = request.payload.uid;
            var _query = { mail: _uid, pwd: _pwd };

            var doc = await Member.findOne(_query).select({ _id: 1, ln: 1, fn: 1, avt: 1, mail: 1, stt: 1, fa: 1 });

            if (doc) {

                if (doc.stt == 0) {
                    return { stt: 0, msg: "Your account needs to be activated" };
                } else {
                    var token = JWT.sign(doc.toJSON(), config.cookie.password, { expiresIn: '30d' });

                    return h.response({ stt: 1, msg: "Login successfuly!" })
                        .header("Authorization", token) // where token is the JWT
                        .state("token", token, config.cookie);
                }
            }

            return { stt: 0, msg: "You forgot your email or password" };
        }
    },

    // --------------Register----------------

    {
        method: 'POST',
        path: '/register',
        options: {
            auth: false,
            validate: {
                payload: Joi.object({
                    fn: Joi.string(),
                    ln: Joi.string(),
                    uid: Joi.string().lowercase().email().required(),
                    pwd: Joi.string().required(),
                    repwd: Joi.ref('pwd')
                })
            }
        },
        handler: async (request, h) => {
            var _pwd = Hash.pwd(request.payload.pwd);
            var _uid = request.payload.uid || request.payload.mail;

            var doc = await Member.findOne({ mail: _uid }).select({ _id: 1 });

            if (!doc) {

            
                var obj = Object.assign({}, request.payload, { pwd: _pwd, mail: _uid });

                doc = await new Member(obj).save();               

                return { stt: 1, msg: "Registration successful. Please check your email to verify your email address." };
            }

            return { stt: -1, msg: "Email has been registered. Please login or forget your password." };


        }
    },




    {
        method: ['GET', 'POST'],
        path: '/member/session',

        config: {
            auth: {
                mode: 'try'
            }
        },

        handler: (request, h) => {
            var auth = request.auth.credentials;
            return request.auth.isAuthenticated ? {
                session: {
                    id: auth._id,
                    mail: auth.mail,
                    fn: auth.fn,
                    ln: auth.ln,
                    avt: auth.avt,
                    name: [auth.fn, auth.ln].join(' ')
                },
                authenticated: request.auth.isAuthenticated
            } : null;
        }
    },





];
