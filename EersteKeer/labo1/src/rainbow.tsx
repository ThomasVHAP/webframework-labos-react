const RainApp = () => {
    const colors = Array.from({length: 100}, (_, i) => `hsl(${i * 360 / 100}, 100%, 50%)`);

    return (
        <div>
            {
                colors.map((v) => (
                    <div style={{width: "100%", height: "4px", backgroundColor: v}}></div>
                ))
            }
        </div>
    )
}

export default RainApp;