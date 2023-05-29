import { HouseController } from "./controller/house-controller"

export const Routes = [{
    method: "get",
    route: "/house",
    controller: HouseController,
    action: "all"
}, {
    method: "get",
    route: "/house/:id",
    controller: HouseController,
    action: "one"
}, {
    method: "post",
    route: "/house",
    controller: HouseController,
    action: "save"
}, {
    method: "delete",
    route: "/house/:id",
    controller: HouseController,
    action: "remove"
}]