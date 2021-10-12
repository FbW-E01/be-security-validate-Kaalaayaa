import { body } from "express-validator"

const birdsValidators = [
    body("species").isLength({min:3}).withMessage("must-be-at-least-3-char-long"),
    body("species").isLength({max:80}).withMessage("too-long"),
    body("species").isAlpha().withMessage("shouldnt-contain-numbers"),
    body("notes").isAlpha('en-US', {ignore: ' , .'}).withMessage("shouldnt-contain-numbers"),
    body("notes").isLength({max:140}).withMessage("too-long"),
    body("estimatedAmount").isNumeric().withMessage("this-is-not-a-number"),
]

export default birdsValidators