const MyTabs = () => {
    const contentTab1 = () => {
        return (
            <div>
                this is tab 1
            </div>
        )
    }
    return (

        <>
            <div>
                <span>tab 1</span>
                <span>tab 2</span>
                <span>tab 3</span>
            </div>
            <div>
                <contentTab1 />
            </div>
        </>
    )
}
export default MyTabs;