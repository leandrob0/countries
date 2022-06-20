export const formatCapitals = (capitals: string[]): string => {
    if(capitals !== undefined && capitals.length > 0) {
        let formattedText = '';
        
        capitals.forEach((capital, index) => {
            if(index + 1 === capitals.length) formattedText += capital;
            else formattedText += capital + ', ';
        })

        return formattedText;
    } 

    return 'Unknown'
}