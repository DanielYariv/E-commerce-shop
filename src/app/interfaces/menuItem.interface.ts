export interface MenuItem {
  label: string;
  icon: string;
  routerLink: string;
  items?: MenuItem[]; // Nested items should also conform to the MenuItem type
  badge?: string;
  styleClass?: string;
}
