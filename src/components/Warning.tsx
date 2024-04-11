import * as Dialog from "@radix-ui/react-dialog";
import { CloseIcon, WarningIcon } from "./Icons";

export default function Warning() {
    return (
        <Dialog.Root defaultOpen>
            <Dialog.Portal>
                <Dialog.Overlay />
                <Dialog.Content className="fixed inset-3 z-[100] m-8 flex flex-col items-center justify-center bg-slate-50 p-8 font-mono bg-opacity-50 backdrop-blur-lg">
                    <Dialog.Close>
                        <CloseIcon />
                    </Dialog.Close>
                    <WarningIcon />
                    <Dialog.Description className="text-center font-notable text-yellow-900">
                        Warning
                    </Dialog.Description>
                    <span className="text-center">
                        This granular synthesizer can make loud noise!
                    </span>
                    <span className="text-center font-armata text-xl">
                        before any exploration
                    </span>
                    <div className="text-center">
                        it is <span className="underline">recommended</span> to
                        set your device volume to <strong>minimum</strong>{" "}
                        <span className="italic">before</span> pressing play,
                    </div>
                    <span className="text-center">
                        and then <strong>adjust to taste</strong>
                    </span>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
