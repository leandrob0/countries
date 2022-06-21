export const formatCapitals = (capitals: string[]): string => {
    if(capitals !== undefined) {
        if(capitals.length === 1) return capitals[0];
        else if(capitals.length > 1) {
            let formattedText = '';
            
            capitals.forEach((capital, index) => {
                if(index + 1 === capitals.length) formattedText += capital;
                else formattedText += capital + ', ';
            })

            return formattedText;
        }
    }

    return 'Unknown'
}