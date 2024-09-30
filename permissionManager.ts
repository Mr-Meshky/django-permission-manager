type Permission = `${"add" | "view" | "change" | "delete"}_${string}`;

export class PermissionManager {
  private permissions: Permission[];

  constructor(permissions: Permission[]) {
    this.permissions = permissions;
  }

  hasPermission(
    model: string,
    actions: ("add" | "view" | "change" | "delete")[],
  ): boolean {
    return actions.some((action) => {
      const permissionString: Permission = `${action}_${model}`;
      return this.permissions.includes(permissionString);
    });
  }
}
