import { handleErrors } from "./handleErrors.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyId } from "./verifyId.middlewares";
import { verifyToken } from "./validateToken.middleware";
import { uniqueProductName } from "./uniqueProductName.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";

export default {
  handleErrors,
  validateBody,
  verifyId,
  verifyToken,
  uniqueProductName,
  uniqueEmail,
};
