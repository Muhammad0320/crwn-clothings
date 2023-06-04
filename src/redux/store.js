import { configureStore } from "@reduxjs/toolkit";

import { applyMiddleware } from "@reduxjs/toolkit";

import rootReducer from "./root-reducer";

import logger from "redux-logger";

const middleWare = [logger];

const store = configureStore(rootReducer, applyMiddleware(...middleWare));

export default store;
