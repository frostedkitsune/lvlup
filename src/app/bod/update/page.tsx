
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL || "", process.env.SUPABASE_KEY || "")


export default async function BOD() {
    const { error:any } = await supabase
      .from('users_student')
      .update({ name: "subhajit giri"})
      .eq('id', 3)

    return (
        <h1>result of : <br />
        </h1>
    );


}