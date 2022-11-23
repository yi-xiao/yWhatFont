import createMenu from './menu'
import marker from './marker'

export default class YWhatFont {
    public tag: string

    constructor(tagName: string) {
        this.changeTargetTag = this.changeTargetTag.bind(this)

        this.init()
        this.tag = tagName || 'h1'
    }

    init() {
        createMenu()

        this.changeTargetTag(this.tag)
    }

    cleanup(): void {
        document.querySelectorAll('.yWhat-target').forEach(element => element.remove())

        document.querySelectorAll('.yWhat-panel').forEach(element => element.remove())
    }

    changeTargetTag(tag: string) {
        marker(tag)
    }
}