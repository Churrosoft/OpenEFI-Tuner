using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace WinAppOpenForm
{
    public partial class Form1 : Form, IForm
    {
        public Form1()
        {
            InitializeComponent();
        }

        #region IForm Members

        public void ChangeTextBoxText(string text)
        {
            TextBox1.Text = text; 
        }

        #endregion

        private void Button1_Click(object sender, EventArgs e)
        {
            Form2 form2 = new Form2();
            form2.Show(this);
        }
    }
}
