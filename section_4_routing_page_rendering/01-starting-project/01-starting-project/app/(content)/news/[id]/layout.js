export default function NewsItemLayout( {children , modal}) {
    return (
        <>
            {modal}
            {children}
        </>  
    );
}