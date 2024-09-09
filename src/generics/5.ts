export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
}

type UserRoleStatus = Record<UserRole, string>;
// Замініть наступний код на версію за допомогою Record
const RoleDescription: UserRoleStatus = {
    admin: 'Admin User',
    editor: 'Editor User',
    guest: 'Guest User',
};