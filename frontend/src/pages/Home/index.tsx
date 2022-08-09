import React, { useContext, useEffect, useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import {
  Parallax,
  UpFirstContent,
  DownFirstContent,
  DownGridContainer,
  FirstParallax,
  SecondParallax,
  SecondParallaxSubTitle
} from './style';
import { Button } from '../../components/Button/ApolloButton';
import p1 from '../../images/parallax1.png';
import p2 from '../../images/parallax2.png';

import { Link, useNavigate } from 'react-router-dom';
import { TextInputLaranja, Div, Select } from '../../components/TextInputLaranja/TextInputLaranja';
import { NotificationContext } from '../../components/NotificationProvider/NotificationProvider';
import { useTitle } from '../../hooks/useTitle';
import api from '../../services/api';

interface ISearch {
  city: string;
  query: string;
}
const Home = () => {
  useTitle('Home');
  const { showNotification } = useContext(NotificationContext);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    api.get('/professionals/cities').then((res) => setCities(res.data));
  }, []);
  const navigate = useNavigate();
  const [search, setSearch] = useState<ISearch>({
    city: '',
    query: ''
  });
  const handleChange = (e: any) => {
    setSearch((curr) => ({
      ...curr,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <>
      <div id="main">
        <Parallax url={p1}>
          <FirstParallax>
            <UpFirstContent>Busque um estilo com os nossos profissionais</UpFirstContent>
            <DownFirstContent>
              <DownGridContainer>
                <Div>
                  <Select name="city" onChange={handleChange} defaultValue="">
                    <option value="" disabled>
                      Cidade
                    </option>
                    {cities.map((city) => {
                      return (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      );
                    })}
                  </Select>
                </Div>
                <TextInputLaranja
                  label=""
                  placeholder="Busque um profissional"
                  name="query"
                  value={search?.query || ''}
                  onChange={handleChange}
                />
                <Button
                  variant="contained"
                  style={{ gridColumnStart: '1', gridColumnEnd: '3' }}
                  onClick={() => {
                    if (!search.city || search.city.length === 0) {
                      return showNotification('Por favor selecione uma cidade', 'warning');
                    }
                    navigate(`/buscar?city=${search.city}&query=${search.query}`, {
                      replace: true
                    });
                  }}
                >
                  Buscar
                </Button>
              </DownGridContainer>
            </DownFirstContent>
          </FirstParallax>
        </Parallax>
        <Parallax url={p2}>
          <SecondParallax>
            <SecondParallaxSubTitle>Encontre barbearias próximas à você</SecondParallaxSubTitle>
            <Button component={Link} to="/profissional/login" variant="contained">
              Sou profissional
            </Button>
          </SecondParallax>
        </Parallax>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
