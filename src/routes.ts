import { HouseController } from "./controller/house.controller"

export const Routes = [
    {
        method: "get",
        route: "/home",
        controller: HouseController,
        action: "getSkipAndTake"
    },
    {
        method: "post",
        route: "/home",
        controller: HouseController,
        action: "save"
    },
    {
        method: "patch",
        route: "/home/:id",
        controller: HouseController,
        action: "update"
    },
    {
        method: "get",
        route: "/postCode",
        controller: HouseController,
        action: "getPostCode"
    },
    {
        method: "get",
        route: "/postCode/:id",
        controller: HouseController,
        action: "getPostCodeAvg"
    },
    {
        method: "get",
        route: "/home/:id",
        controller: HouseController,
        action: "one"
    },
    {
        method: "delete",
        route: "/home/:id",
        controller: HouseController,
        action: "remove"
    }
]