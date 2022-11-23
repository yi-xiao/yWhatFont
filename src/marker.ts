function showPanel(position: DOMRect) {

}

export default function maker (tagName: string) {
    document.querySelectorAll(tagName).forEach(element => {
        // 获取元素的宽高，坐标轴
        const { x, y, width, height } = (element as HTMLElement).getBoundingClientRect()

        console.log(`elementName: x=> ${ x }, y=>${ y }, width => ${ width }, height: ${ height }`)

    })
}