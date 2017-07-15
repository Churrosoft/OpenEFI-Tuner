using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO.Ports;

namespace OpenEFI_Tuner{

    public partial class Form1 : Form{
        
        public Form1(){

            InitializeComponent();
            
        }

        private void Form1_Load(object sender, EventArgs e){

        }

        private void listBox1_SelectedIndexChanged(object sender, EventArgs e){

        }

        private void textBox1_TextChanged(object sender, EventArgs e) {

        }

        private void button2_Click(object sender, EventArgs e) {

            string[] ports = SerialPort.GetPortNames();
            foreach (string port in ports){
                listBox1.Items.Add(port);
            }
        }

        private void button1_Click(object sender, EventArgs e) {
            SerialPort ArduinoPort = new SerialPort(); //DECLARAMOS instancia de serial port para luego empezar comunicacion
                  ArduinoPort.PortName = (string)listBox1.SelectedItem; //el puerto lo sacamos del listbox1 
                  ArduinoPort.BaudRate = 9600; //la veloidad siempre queda fija
            try{
                ArduinoPort.Open(); //intentamos conectarnos al arduino
                MessageBox.Show("Se puedo conectar :D");
            } catch{
                MessageBox.Show("Te mandaste una cagada boludo 7-7");
            }
        }

        private void aquaGauge1_Load(object sender, EventArgs e)
        {
            
        }

        private void aquaGauge1_Load_1(object sender, EventArgs e)
        {
            aquaGauge1.MaxValue = 8000;
            aquaGauge1.MinValue = 0;
            aquaGauge1.DialText = "RPM";

            aquaGauge2.MaxValue = 120;
            aquaGauge2.MinValue = -10;
            aquaGauge2.Value = 50;
            aquaGauge2.DialText = "Temp";

            aquaGauge3.MaxValue = 18;
            aquaGauge3.MinValue = 0;
            aquaGauge3.Value = 12.6F;
            aquaGauge3.DialText = "Volt";
        }

        private void trackBar1_Scroll(object sender, EventArgs e)
        {
            trackBar1.Maximum = 8000;
            trackBar1.Minimum = 0;
            aquaGauge1.Value = trackBar1.Value;
        }
    }
}
