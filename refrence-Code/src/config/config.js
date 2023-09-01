const dotenv = require("dotenv");
const joi = require("joi");
dotenv.config();

const EnvVarsSchema = joi.object({
    PORT: joi.number().default(3080),
    MONOGODB_URL: joi.string().trim().description("mongodb url"),
}).unknown();

const { value: EnvVars, Error } = EnvVarsSchema.prefs({
    errors: { label: "key" }
}).validate(process.env);

if (Error) {
    console.log("Config File Error :- ", Error);
}

module.exports = {
    port: EnvVars.PORT,
    mongodb: {
        url: EnvVars.MONOGODB_URL,
        options: {
            useNewUrlParser: true,
            useunifiedTopology: true,
        },
    },
};