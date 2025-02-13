import app from "../../quickbooks_sandbox.app.mjs";
import common from "../../../quickbooks/sources/new-employee-updated/new-employee-updated.mjs";

import { adjustPropDefinitions } from "../../common/utils.mjs";

const {
  name, description, type, ...others
} = common;
const props = adjustPropDefinitions(others.props, app);

export default {
  ...others,
  key: "quickbooks_sandbox-new-employee-updated",
  version: "0.0.2",
  name,
  description,
  type,
  props: {
    quickbooks: app,
    ...props,
  },
};
