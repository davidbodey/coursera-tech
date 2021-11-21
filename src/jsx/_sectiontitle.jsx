const SectionTitle = ({title='Excepteur sint occaecat'}) => {
    return (
        <div>
            <div className="level">
                <div className='is-size-3 is-pulled-left'>{title}</div><br />
            </div> <br />

            <div className="level">
                <p className='is-size-4 is-pulled-left padding-bottom-100'>Ut enim ad minim veniam, <b>quis nostrud exercitation</b> ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
            </div><br />
        </div>
    );
}

export default SectionTitle;