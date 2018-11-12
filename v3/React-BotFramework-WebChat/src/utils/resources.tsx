export default class Resources {
    static get getBotName(): string {
        return this.throwIfUndefined(
            process.env.REACT_APP_BOT_NAME,
            'Default BOT_NAME is not specified.'
        );
    }

    static get getBotId(): string {
        return this.throwIfUndefined(
            process.env.REACT_APP_BOT_ID,
            'Default BOT_ID is not specified.'
        );
    }

    private static throwIfUndefined(value: string | undefined, message: string): string {
        if (!value) {
            throw Error(message);
        }

        return value;
    }
}