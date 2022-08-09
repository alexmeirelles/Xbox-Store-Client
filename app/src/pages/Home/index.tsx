import Header from '../../components/Header/index';
import "./style.ts";
import ListGames from 'components/ListGames';
import { mockedCategories } from "../../mocks";
import { Dispatch, SetStateAction, useState } from "react";



//interface User

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    mockedCategories[0]
  );

  const filteredProducts: Product[] = mockedProducts.filter(
    (element) => element.categoryId === selectedCategory.id
  );

  return (
    <main>
      <Header/>
      <ListGames/>
      <S.CategoriesNavigationBar>
            {mockedCategories.map((element) => {
              return (
                <S.CategoriesNavigationButton
                  active={element.name === selectedCategory.name}
                  onClick={() => setSelectedCategory(element)}
                >
                  {element.name}
                </S.CategoriesNavigationButton>
              );
            })}
          </S.CategoriesNavigationBar>
          <ListGames list={filteredProducts} />
    </main>
)
}
export default Home;