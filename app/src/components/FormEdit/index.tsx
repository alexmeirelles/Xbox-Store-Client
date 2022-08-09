import * as S from './style'
//import { gameService } from 'services/gameService'

const FormEdit = () => {
  return (

    <S.EditMain>

    <S.EditContainer>
      <S.EditLeft>
        <S.FormEdit>
        <S.FormEditTitle>
        Editar Jogo
      </S.FormEditTitle>
      <S.InputCreate type='text' name='title' placeholder=' nome ' />
      <S.InputCreate type='text' name='coverImageUrl' placeholder='Imagem Url' />
      <S.InputCreate type='text' name='description' placeholder='Descrição' />
      <S.InputCreate type='number' name='year' placeholder='Ano' />
      <S.InputCreate type='number' name='imdbScore' placeholder='IMDB' />
      <S.InputCreate type='text' name='urlTrailerYT' placeholder='trailer Url' />
      <S.InputCreate type='text' name='urlGameplayYT' placeholder='gameplay Url' />
      <S.InputCreate type='text' name='genreName' placeholder='Gênero' />


      <S.ButtonCreate>atualizar</S.ButtonCreate>
      <S.ButtonCreate>apagar</S.ButtonCreate>

      </S.FormEdit>
    </S.EditLeft>


    <S.EditRight>
    <S.FormEdit>
    <S.FormEditTitle>
        Inserir Gênero
      </S.FormEditTitle>

      <S.InputCreate type='text' name='genre' placeholder='Gênero' />     
      <S.ButtonCreate>inserir</S.ButtonCreate>

    </S.FormEdit>

    <S.FormEdit>
    <S.FormEditTitle>
      Atualizar Gênero
    </S.FormEditTitle>

    <S.InputCreate type='text' name='genre' placeholder='Gênero' />
    
    <S.ButtonCreate>atualizar</S.ButtonCreate>
    </S.FormEdit>
      </S.EditRight>

    </S.EditContainer>

  </S.EditMain>
  )
}

export default FormEdit