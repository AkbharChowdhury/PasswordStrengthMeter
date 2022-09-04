<?php require_once 'templates/header.php' ?>
<div class="container py-5">
    <h1 class="text-capitalize">password strength meter</h1>
    <hr>
    <form>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password"  autofocus>
      </div>
      <div class="mb-3">
        <div class="progress">
          <div class="progress-bar bg-success" role="progressbar" aria-label="password strength bar" aria-valuemin="0"
            aria-valuemax="100"></div>
        </div>
      </div>
    </form>
<section>
  <!-- vertically aligning icons -->

<div style="font-size: 2rem;">
  <div>
    <span id="contains_upper"></span> contains upper case
  </div>

  <div>
    <span id="contains_lower"></span> contains lower case
  </div>

  <div>
    <span id="contains_number"></span> contains number
  </div>

  <div>
    <span id="contains_special_chars"></span> contains special character
  </div>

  <div>
    <span id="min_length"></span> is at least 8 characters long
  </div>
</div>
</section>

 </div>
<?php require_once 'templates/footer.php' ?>
