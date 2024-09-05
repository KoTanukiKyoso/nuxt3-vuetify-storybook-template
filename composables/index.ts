export const useStore = () => {
    let test: Ref<string> = useState('test', (): string => "This is a test");

    return {
        test,
    };
};
