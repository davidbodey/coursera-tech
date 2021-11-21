const TextBlock = () => {
    return (
        <div className="column" style={{textAlign: 'left', color: '#1F1F1F'}}>
            <div className='hero-h1'>
                Lorem ipsum dolor
            </div>

            <div className={'is-size-2 has-text-weight-600'}>
                Consectetur adipiscing elit
            </div><br/><br/>

            <div className={'is-size-4'}>
                <p>Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip.</p>
            </div><br/><br/><br/>

            <div className={'is-size-5'}>
                Duis aute irure dolor in <b>reprehenderit in voluptate</b> velit esse cillum
                dolore eu fugiat nulla pariatur
            </div><br/>
        </div>
    );
};

export default TextBlock;