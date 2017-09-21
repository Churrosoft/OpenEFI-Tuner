using System;
using System.Windows.Forms;
namespace OpenEFI_Tuner
{
    public partial class Form3 : Form
    {
        public delegate bool EnviarSerie(string txt, bool op);
        public event EnviarSerie miserie;
        //Declaramos variable :D
        float valor1 = 0;
        float valor2 = 0;
        float tmp;
        string temp, temp2, temp3;
        int aInt;
        bool modo = false; //false en modo comun, true modo manual
        float ant1, ant2;    //valores anteriores de valores
        public Form3()
        {
            InitializeComponent();
        }

        private void Form3_Load(object sender, EventArgs e)
        {
            
            string msg = "En este modo se puede dejar un valor de inyeccion y avance fijo, solo usar para pruebas";
            string tit = "OpenEFI || Tuner v 1.3.5";
            MessageBox.Show(msg,tit,MessageBoxButtons.OK);
        }

        private void button2_Click(object sender, EventArgs e)
        {
            valor1 = valor1 + 0.05F;
            aInt = (int)(valor1 * 100);
            tmp = aInt / 100.0f;
            temp = Convert.ToString(tmp);
            sevenSegmentArray1.Value = temp;
            valor1 = tmp;
            temp = Convert.ToString(valor1);
            sevenSegmentArray1.Value = temp;

            if (modo == true && valor1 != ant1)
            {
               
                temp3 = "INY";
                temp2 = temp3 += Convert.ToString(valor1);
                this.miserie(temp3,true);
                ant1 = valor1;
            
            }

        }
        

        private void button5_Click(object sender, EventArgs e)
        {
            valor2 = valor2 + 0.5F;
            temp = Convert.ToString(valor2);
            sevenSegmentArray4.Value = temp;
            if (modo == true && valor2 != ant2)
            {

                temp3 = "AVC";
                temp2 = temp3 += Convert.ToString(valor2);
                this.miserie(temp3, true);
                ant2 = valor2;

            }
        }

        private void button3_Click(object sender, EventArgs e)
        {
            if (valor1 != 0) {
                valor1 = valor1 - 0.05F;
                aInt = (int)(valor1 * 100);
                tmp = aInt / 100.0f;
                temp = Convert.ToString(tmp);
                sevenSegmentArray1.Value = temp;
                valor1 = tmp;
                if (modo == true && valor1 != ant1)
                {

                    temp3 = "INY";
                    temp2 = temp3 += Convert.ToString(valor1);
                    this.miserie(temp3, true);
                    ant1 = valor1;

                }

            }

        }

        private void button4_Click(object sender, EventArgs e)
        {
            if(valor2 != 0) {
                valor2 = valor2 - 0.5F;
                temp = Convert.ToString(valor2);
                sevenSegmentArray4.Value = temp;
            }
            if (modo == true && valor2 != ant2)
            {

                temp3 = "AVC";
                temp2 = temp3 += Convert.ToString(valor2);
                this.miserie(temp3, true);
                ant2 = valor2;

            }
        }

        private void button6_Click(object sender, EventArgs e)
        {
                valor1 = valor1 + 1F;
                aInt = (int)(valor1 * 100);
                tmp = aInt / 100.0f;
                temp = Convert.ToString(tmp);
                sevenSegmentArray1.Value = temp;
                valor1 = tmp;
                if (modo == true && valor1 != ant1)
                {

                    temp3 = "INY";
                    temp2 = temp3 += Convert.ToString(valor1);
                    this.miserie(temp3, true);
                    ant1 = valor1;

                }
            
        }

        private void button8_Click(object sender, EventArgs e)
        {
            if (valor1 != 0) {
                 valor1 = valor1 - 1F;
                aInt = (int)(valor1 * 100);
                tmp = aInt / 100.0f;
                temp = Convert.ToString(tmp);
                sevenSegmentArray1.Value = temp;
                valor1 = tmp;
                if (modo == true && valor1 != ant1) {

                    temp3 = "INY";
                    temp2 = temp3 += Convert.ToString(valor1);
                    this.miserie(temp3, true);
                    ant1 = valor1;

            }
        }
        }

        private void button9_Click(object sender, EventArgs e)
        {
            if (valor1 != 0)
            {
                valor1 = valor1 - 10F;
                aInt = (int)(valor1 * 100);
                tmp = aInt / 100.0f;
                temp = Convert.ToString(tmp);
                sevenSegmentArray1.Value = temp;
                valor1 = tmp;

                if (modo == true && valor1 != ant1)
                {
                    temp3 = "INY";
                    temp2 = temp3 += Convert.ToString(valor1);
                    this.miserie(temp3, true);
                    ant1 = valor1;
                }
            }
        }

        private void button7_Click(object sender, EventArgs e)
        {
                valor1 = valor1 + 10F;
                aInt = (int)(valor1 * 100);
                tmp = aInt / 100.0f;
                temp = Convert.ToString(tmp);
                sevenSegmentArray1.Value = temp;
                valor1 = tmp;

                if (modo == true && valor1 != ant1)
                {
                    temp3 = "INY";
                    temp2 = temp3 += Convert.ToString(valor1);
                    this.miserie(temp3, true);
                    ant1 = valor1;
                }
            
        }

        private void button10_Click(object sender, EventArgs e)
        {
            //Mandamo comando para arrancar el motor
            this.miserie("ARRRPERRROOO",true);
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (this.miserie("DBG", true)) { //para evitar mostrar los mensajes si no hay conexion
                if (modo == false)
                {
                    this.miserie("FXD.E", true);
                    MessageBox.Show("Modo manual activado", "OpenEFI || Fixed Mode");
                    modo = true;
                } else if (modo == true) {
                    this.miserie("FXD.D", true);
                    MessageBox.Show("Modo manual desactivado", "OpenEFI || Fixed Mode");
                    modo = false;
                }
            }
        }

        private void sevenSegmentArray1_Load(object sender, EventArgs e)
        {
            
        }

        private void sevenSegmentArray4_Load(object sender, EventArgs e)
        {
            
        }
    }
}
