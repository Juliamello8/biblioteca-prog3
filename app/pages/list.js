export const ListComponent = {
    template: `
    <div class="overflow-x-auto">
    <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
        <div class="w-full lg:w-5/6">
            <router-link to="/">
                <div class="flex itens-center justify-center">
                    <p class="flex justify-center text-4x1 text-white text-center py-2 px-2 max-w-lg bg-white shadow-2xl mt-10 bg-yellow-500 rounded hover:bg-yellow-600 hover:shadow-sm duration-300">
                        <svg class="svg-icon" viewBox="0 0 20 20" width="24" fill="white">
                        <path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>
                        </svg>
                        &nbsp;&nbsp;Voltar para home
                    </p>
                </div>
            </router-link>
            <div class="bg-white shadow-md rounded my-6">
                <table class="min-w-max w-full table-auto">
                    <thead>
                        <tr class="bg-purple-500 text-white uppercase text-sm leading-normal">
                            <th class="py-3 px-6 text-left">ID</th>
                            <th class="py-3 px-6 text-left">TITULO</th>
                            <th class="py-3 px-6 text-center">AUTOR</th>
                            <th class="py-3 px-6 text-center">AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-600 text-sm font-light">
                        <tr class="border-b border-gray-200 hover:bg-gray-100" v-for="item in dataLista">
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                                <div class="flex items-center">                                    
                                    <span class="font-medium">{{item.id}}</span>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                    <span class="font-medium">{{item.titulo}}</span>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex items-center">
                                    <span class="font-medium">{{item.autor}}</span>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex item-center justify-center">
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <router-link :to="{name: 'Visual', params: {id: item.id}}">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </router-link>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <router-link :to="{name: 'Editar', params: {id: item.id}}">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </router-link>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <router-link :to="{name: 'Excluir', params: {id: item.id}}">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </router-link>
                                    </div>
                                </div>
                            </td>
                        </tr>                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>`,
    data() {
        return {
            dataLista: [
                {
                    id: 1,
                    titulo: 'Livro Vuejs',
                    autor: 'Criador do Vuejs'
                },
                {
                    id: 2,
                    titulo: 'Livro Java',
                    autor: 'Criador do Java'
                },
                {
                    id: 3,
                    titulo: 'Livro PHP',
                    autor: 'Criador do PHP'
                },
                {
                    id: 4,
                    titulo: 'Livro JS',
                    autor: 'Criador do JavaScript'
                },
                {
                    id: 5,
                    titulo: 'Livro React',
                    autor: 'Criador do React'
                }
            ]
        }
    }
}