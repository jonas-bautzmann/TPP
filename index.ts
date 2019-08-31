import {appendIcon} from "./src/Icon";
import {appendPanel} from "./src/Panel";
import {addListenersToReviews} from "./src/Tag";

import "./style/index.scss";
import {hideTagInput} from "./src/TagInput";

appendIcon();
appendPanel();
addListenersToReviews();
hideTagInput();