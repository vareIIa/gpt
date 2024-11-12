export const handleTranslate = async (inputCode: string, setOutputCode: (output: string) => void, setLoading: (loading: boolean) => void) => {
    setLoading(true);
  
    const payload = {
      message: inputCode,
    };
  
    try {
      const response = await fetch('http://147.79.111.214:5000/chatbot/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': 'b7fe1fd2-7074-4ae0-95ec-23f637695b87',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        setLoading(false);
        alert('Falha na comunicação com o coach de IA.');
        return;
      }
  
      const data = await response.json();
      const coachAnswer = data.response || 'Sem resposta';
      setOutputCode(coachAnswer);
    } catch (error) {
      setLoading(false);
      console.error('Erro:', error);
    }
  
    setLoading(false);
  };