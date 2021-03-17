export const WelcomeComponent = {
    template: `
        <div>
            <div class=" mx-auto py-10 bg-purple-500 text-white">
                <h1 class="text-3xl text-center pb-3">Bem Vindx!</h1>
                <h4 class="text-1xl text-center"><i>Customize a lista dos seus livros mais incríveis.</i></h4>

            </div>
            <hr>
            <router-link to="/List">
                <div class="flex itens-center justify-center">
                    <p class="flex justify-center text-4x1 text-white text-center py-2 px-2 max-w-lg bg-white shadow-2xl mt-10 bg-yellow-500 rounded hover:bg-yellow-600 hover:shadow-sm duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke-width="2" stroke="currentColor" width="24" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-justify"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
                        &nbsp;&nbsp;Acessar listagem
                    </p>
                </div>
            </router-link>
        </div>    
    `,

    data() {
        return {

        }
    }
}