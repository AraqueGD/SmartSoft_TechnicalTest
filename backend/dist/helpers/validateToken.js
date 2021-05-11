"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
exports.TokenValidation = function (req, res, next) {
    var token = req.header("auth-token");
    if (!token) {
        return res.status(401).json({ message: "Access Denied" });
    }
    var payload = jwt.verify(token, "SECRET");
    console.log(payload);
    req.userId = payload.id;
    next();
};
//# sourceMappingURL=validateToken.js.map