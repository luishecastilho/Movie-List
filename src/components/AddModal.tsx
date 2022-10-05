import { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';

import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Input } from './Form/Input';

interface Platform {
    id: string;
    name: string;
}

export function AddModal() {

    const [platforms, setPlatforms] = useState<Platform[]>([]);

    useEffect(() => {
        setPlatforms([
            {
                id: '1',
                name: 'Netflix',
            },
            {
                id: '2',
                name: 'Amazon Prime Video',
            },
            {
                id: '3',
                name: 'Disney+',
            },
            {
                id: '4',
                name: 'Star+',
            },
            {
                id: '5',
                name: 'HBO Max',
            },
            {
                id: '6',
                name: 'Cinema',
            },
        ])
    }, []);
    async function handleCreateAd(event: FormEvent) {
        event.preventDefault();
        
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        // validação

        /*try {
            await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
                "name": data.name,
                "yearsPlaying": Number(data.yearsPlaying),
                "discord": data.discord,
                "weekDays": weekDays.map(Number),
                "hourStart": data.hourStart,
                "hourEnd": data.hourEnd,
                "useVoiceChannel": useVoiceChannel
            });

            alert("Anuncio criado com sucesso!");
        } catch (error) {
            alert("Erro ao criar o anúncio!");
            console.log(error);
        }*/
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
                <Dialog.Title className="text-3xl font-black">Adicione um Filme/Série</Dialog.Title>
                <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="title">Titulo</label>
                        <Input id="title" name="title" placeholder="Harry Potter e o Cálice de Fogo" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="platform" className="font-semibold">Aonde assistiu?</label>    
                        <select
                            id="platform"
                            name="platform"
                            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
                            defaultValue=""
                        >
                            <option disabled value="">Selecione a plataforma em que assistiu</option>
                            {platforms.map(platform => {
                                return (
                                    <option key={platform.id} value={platform.id}>{platform.name}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="flex gap-12">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="score">Qual a nota?</label>
                            <div className="grid grid-cols-12 gap-2">
                                <Input type="radio" name="score" value="1" />1
                                <Input type="radio" name="score" value="2" />2
                                <Input type="radio" name="score" value="3" />3
                                <Input type="radio" name="score" value="4" />4
                                <Input type="radio" name="score" value="5" />5
                            </div>
                        </div>
                    </div>

                    <footer className="mt-4 flex justify-end gap-4">
                        <Dialog.Close
                            type="button"
                            className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
                            Cancelar
                        </Dialog.Close>
                        <button
                            type="submit"
                            className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                        >
                            Adicionar 
                        </button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}