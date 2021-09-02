export class CoordinatorModel {
    id?: Number;
    name: String | undefined;
    email: String | undefined;
    password: String | undefined;
    role_id: Number | undefined;
    coordinator: CoordinatorModel | undefined;
    tk: String | undefined;
    isLoggedIn: boolean = false;
}