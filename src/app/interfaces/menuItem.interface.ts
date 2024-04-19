export interface MenuItem {
  label: string;
  icon: string;
  routerLink: string;
  items?: MenuItem[]; // Optional nested items for submenus
  badge?: string;
  styleClass?: string;
}
