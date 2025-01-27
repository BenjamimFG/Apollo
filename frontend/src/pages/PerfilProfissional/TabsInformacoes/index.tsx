import React, { useState } from 'react';
import TabPanel from '../../../components/Tab/TabPanel/TabPanel';
import ApolloTab from '../../../components/Tab/Tabs';
import IProfissional from '../../../types/IProfissional';
import { Avaliacoes } from './Avaliacoes';
import ServicosDisponiveis from './ServicosDisponiveis';

interface TabsInformacoesProps {
  profissional: IProfissional | undefined;
  id: string | undefined;
}
export const TabsInformacoes: React.FC<TabsInformacoesProps> = ({ profissional, id }) => {
  const [tabValue, setTabValue] = useState<number>(0);

  return (
    <>
      <ApolloTab
        value={tabValue}
        setValue={setTabValue}
        opcoes={[
          { value: 0, label: 'Sobre Mim' },
          { value: 1, label: 'Serviços Disponíveis' },
          { value: 2, label: 'Avaliações' }
        ]}
      ></ApolloTab>
      <TabPanel value={tabValue} index={0}>
        {profissional?.aboutMe === null ? (
          <span style={{ color: 'gray' }}>O profissional não disponibilzou esta informação</span>
        ) : (
          profissional?.aboutMe
        )}
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <ServicosDisponiveis servicos={profissional?.services}></ServicosDisponiveis>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <Avaliacoes profissionalId={id}></Avaliacoes>
      </TabPanel>
    </>
  );
};
