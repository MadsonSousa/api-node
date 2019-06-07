select 
  trim(rdb$relation_name) tabela 
from rdb$relations
where rdb$view_blr is null 
  and (rdb$system_flag is null or rdb$system_flag = 0)