type Props = {
    text: string;
}
export const SettingsH1 = ({ text }: Props) => (
    <h1 className="fixed top-0 z-10 font-notable text-4xl text-neutral md:text-6xl lg:inset-x-auto">
        {text}
    </h1>
);

export const SettingsH2 = ({ text }: Props) => (
    <h2 className="py-4 pb-8 pl-4 text-center text-3xl">{text}</h2>
);
