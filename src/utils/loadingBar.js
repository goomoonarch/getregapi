export const loadingBar = ({onKey, isReady, isERAsegReady, allReady, statusCode}) => {
    let status
    if ( statusCode === 500 ) {
        status = false;
        return status;
    }
    status = !allReady && (onKey || isReady || isERAsegReady );
    return status;
}