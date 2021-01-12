export class NavItem {
    nav_name: string
    is_active: string
    link: string
    constructor(nav_name, link, is_active='') {
        this.nav_name = nav_name
        this.link = link
        this.is_active = is_active
    }
}