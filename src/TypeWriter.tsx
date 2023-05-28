import React, { useEffect} from "react";

export interface TypeProps {
	text: string;
}

const TypeWriter: React.FC<TypeProps> = ({text}) => {
    const index = React.useRef(0)
    const [currentText, setCurrentText] = React.useState<string>('')
    useEffect(() => {
        index.current = 0;
        setCurrentText('')
    }, [text])
    

    useEffect(() => {
        if (index.current < text.length) {const timeoutid = setTimeout(() => {
            setCurrentText((value) => value + text.charAt(index.current));
            index.current += 1;
        },30)
        return () => {
            clearTimeout(timeoutid);
        }}
    }, [currentText, text])
    

    return (
        <div>{currentText}</div>
    )
}

export default TypeWriter