const Header = (props) => {
    return(
        <header>
            <div className={'logo'}>Logo</div>
            <input onChange={props.onchangeKeyword} />
        </header>
    )
}

export default Header;