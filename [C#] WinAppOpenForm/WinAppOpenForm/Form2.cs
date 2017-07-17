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
    public partial class Form2 : Form
    {
        public Form2()
        {
            InitializeComponent();
        }

        private void Button1_Click(object sender, EventArgs e)
        {
            IForm formInterface = this.Owner as IForm;

            if(formInterface != null)
                formInterface.ChangeTextBoxText(TextBox1.Text);
        }

    }
}
