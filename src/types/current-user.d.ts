export default interface CurrentUser {
    _id: string;
    name: string;
    phone: string;
    phoneVerified: boolean;
    token?: string;
    image: string;
    // TODO)) add avatar in backend
}
