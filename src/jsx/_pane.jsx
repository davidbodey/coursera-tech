import Box from "./_box";

const Pane = ({header='HIGHLIGHT', title='Lorem', body='Lorem ipsum dolor sit amet'}) => {
    return (
        <div className='center'>
            <p className='has-text-weight-bold'>{header}</p><br/>
            <Box />
            <br />
            <p className='has-text-weight-600 is-size-1'>{title}</p>
            <p className='is-bold is-size-4'>{body}</p>
            <br /> <br />
        </div>
    );
}

export default Pane;