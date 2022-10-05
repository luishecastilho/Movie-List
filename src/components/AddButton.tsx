import { Plus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function AddButton() {
    return (
        <div className="pt-1 self-stretch rounded-lg mt-8 overflow-hidden flex justify-end mr-2">                
            <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
                <Plus size={24} />
                Adicionar novo
            </Dialog.Trigger>
        </div>
    )
}