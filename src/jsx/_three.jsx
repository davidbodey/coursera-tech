import Pane from "./_pane";

const Three = ({title=['Lorem', 'Duis aute', 'Excepteur'], body=['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet']}) => {
    return (
        <div className='container'>
            <div className='columns'>
                <div className='column'>
                    <Pane header='HIGHLIGHT 1' title={title[0]} body={body[0]}></Pane>
                </div>

                <div className='vertical-line' />

                <div className='column'>
                    <Pane header='HIGHLIGHT 2' title={title[1]} body={body[1]}></Pane>
                    <hr className='horizontal-line is-hidden-mobile extended'></hr>
                </div>

                <div className='vertical-line' />

                <div className='column'>
                    <Pane header='HIGHLIGHT 3' title={title[2]} body={body[2]}></Pane>
                </div>
            </div>
        </div>

    );
};

export default Three;